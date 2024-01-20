import Service1 from "../../images/service-1.svg";
import Service2 from "../../images/service-2.svg";
import Service3 from "../../images/service-3.svg";
import Chart from "../../images/chart.svg";
import Calendar from "../../images/calendar.svg";
import ChevronLeft from "../../images/chevron-left.svg";
import Background6 from "../../images/background-6.png";
import Background7 from "../../images/background-7.png";
import Background8 from "../../images/background-8.png";
import {useEffect} from "react";
import axios from "axios";
const BlogCard = ({posts, changePosts}) => {
    const JSONPosts = JSON.parse(posts);
    const images = [
        Background6, Background7, Background8
    ]
    function isObjEmpty (obj) {
        return Object.keys(obj).length === 0;
    }

    const  fetchPosts = async() => {
        try {
            axios.get('https://dummyjson.com/posts')
                .then(response => {
                    // setIsLoading(false);
                    console.log(changePosts);
                    changePosts(JSON.stringify(response.data));
                    if (response.data){
                        console.log(response.data);
                        changePosts(JSON.stringify(response.data));
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        } catch (err) {
            alert(err)
        }
    }
    useEffect(() => {
        console.log(JSONPosts + "i am objectt")
        fetchPosts();
    }, [posts]);
    return (
        <div className="main-container">
            <div className="container">
                <div className="row h-auto">
                    <div className="main-content">
                        <h6>Practice Advice</h6>
                        <h3>Featured Posts</h3>
                    </div>
                </div>
                <div className="row w-85">
                    <div className="product tab tab-group">
                        <div className="tab-content">
                            <div className="tab-one">
                                <div className="row h-100">
                                    {
                                        !isObjEmpty(JSONPosts) && JSONPosts.posts.map((post, index) =>  <div className="col-md-4">
                                                <div className="content-card">
                                                    <div className="fixed-height-1">
                                                        <div className="tag-container">NEW</div>
                                                        <img src={images[index]} alt="Service"/>
                                                    </div>
                                                    <div className="frame-3">
                                                        <div className="tags-container">
                                                            {
                                                                post.tags.map((tag,indexs) => <span className={(indexs === 0 ? "disabled-element-color" : "")} key={indexs}>{tag}</span>
                                                                )
                                                            }
                                                        </div>
                                                        <h4>{post.title}</h4>
                                                        <p className="second-text-color">{post.body}</p>
                                                        <div className="frame-1">
                                                            <div className="frame-1">
                                                                <img src={Calendar} alt="Calendar"/>
                                                                <span className="second-text-color">22 April 2021</span>
                                                            </div>
                                                            <div className="frame-1">
                                                                <img src={Chart} alt="Chart"/>
                                                                <span className="second-text-color">{post.reactions} comment{post.reactions > 0 && "s"}</span>
                                                            </div>
                                                        </div>
                                                        <a className="second-text-color" href="#">Learn More <img src={ChevronLeft} alt="Chart"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ).slice(0,3)
                                    }

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogCard