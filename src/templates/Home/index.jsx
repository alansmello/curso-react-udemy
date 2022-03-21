import {Component} from 'react';

import './styles.css';

import Posts from '../../components/Posts'
import {loadPosts} from '../../utils/load-posts';
import Button from '../../components/Button';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page:0,
    postsPerPage: 6,
  }

  async componentDidMount(){
    await this.loadPosts();
  }

  loadPosts = async()=>{
    const {page, postsPerPage} = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }
    
  loadMorePosts = ()=> {
    const{
      page,
      postsPerPage,
      allPosts,
      posts
    }= this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({posts, page:nextPage});
    
  }
/*
  componentDidUpdate(){
    
  }
  componentWillUnmount(){

  }
*/
  render(){
    const {posts, page, postsPerPage, allPosts} = this.state;
    const noMorePost = page + postsPerPage >= allPosts.length;
    return (
      <section className = "container">
      <Posts posts={posts}/>

      <div className="button-container">
      <Button 
      text="Carregar Mais"
      atributo = {this.loadMorePosts}
      disabled = {noMorePost}/>
      </div>
      </section>
    );
  }
  
}

export default Home;
