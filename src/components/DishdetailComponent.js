import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
    return (
        <Card >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}
function RenderComments({ dish }) {
    const comments = dish.comments.map((comment) => {
        return (
            <div className="m-1 ">
                <div key={comment.id} className="width=100% m-1">
                    <ul>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                    </ul>
                </div>
            </div>
        );
    });
    return (
        <Card>
            <CardBody>
                <CardTitle>{"Comments"}</CardTitle>
                <CardText>{comments}</CardText>
            </CardBody>
        </Card>
    );
}

const Dishdetail =  (props) => {
    if (props.dish == null) {
        return (<div></div>);
    }
    return (
        <div className="container">
            <div class="row">
                <div className="col-12 col-md-5 m-1   ">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1   ">
                    <RenderComments dish={props.dish} />
                </div>
            </div>
        </div>

    );
}
export default Dishdetail;