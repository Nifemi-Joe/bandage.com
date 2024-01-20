import Avatar from "../../images/Avatar.jpg";
import Avatar2 from "../../images/Avatar2.png";
import Avatar3 from "../../images/Avatar3.png";
import Avatar4 from "../../images/Avatar4.png";
import Avatar5 from "../../images/Avatar5.png";
import Avatar6 from "../../images/Avatar6.png";
import Avatar7 from "../../images/Avatar7.png";
import Avatar8 from "../../images/Avatar8.png";
import Avatar9 from "../../images/Avatar9.png";
import Avatar10 from "../../images/Avatar10.png";
import Stars from "../../images/stars.svg"
import Background6 from "../../images/background-6.png";
import Background7 from "../../images/background-7.png";
import Background8 from "../../images/background-8.png";
import axios from "axios";
import {useEffect, useState} from "react";

const TestimonialCard = ({comments, changeComments}) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const images = [
        Avatar4, Avatar9, Avatar6, Avatar2, Avatar8, Avatar3, Avatar5, Avatar7, Avatar10
    ]
    const JSONComment = JSON.parse(comments);
    function isObjEmpty (obj) {
        return Object.keys(obj).length === 0;
    }

    const  fetchComments = async() => {
        try {
            axios.get('https://dummyjson.com/comments')
                .then(response => {
                    // setIsLoading(false);
                    console.log(changeComments);
                    changeComments(JSON.stringify(response.data));
                    if (response.data){
                        console.log(response.data);
                        changeComments(JSON.stringify(response.data));
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
        console.log(JSONComment)
        fetchComments();
    }, [comments]);
    return(
        <div className="main-container p-r-0">
            <div className="container">
                <div className="row w-85">
                    <div className="col-md-5">
                        <h6>What they say about us</h6>
                        <div className="card-item">
                            <div className="card-content">
                                <div className="image-container">
                                    {
                                        selectedIndex === 0 ?  <img src={Avatar} alt="Avatar" className="rounded-image"/> : <img src={images[selectedIndex]} alt="Avatar" className="rounded-image"/>
                                    }
                                </div>
                                <div className="star-container">
                                    <img src={Stars} alt="Stars"/>
                                </div>
                                <h6 className="second-text-color">{!isObjEmpty(JSONComment) ? JSONComment.comments[selectedIndex].body : ""}</h6>
                                <div className="testimonial-block">
                                    <h6 className="disabled-element-color fw-bold text-capitalize">{!isObjEmpty(JSONComment) ? JSONComment.comments[selectedIndex].user.username : ""}</h6>
                                    <h6 className="fw-bold">Designer</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="frame-5">
                            {
                                images.map((image, index) => <button onClick={() => setSelectedIndex(index)}><img src={image} alt="image"/></button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TestimonialCard