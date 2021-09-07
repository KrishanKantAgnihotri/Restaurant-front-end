import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.dish == null) {
            return (<div></div>);
        }
        const comments = this.props.dish.comments.map((comment) => {
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
            <div className="container">
                <div class="row">
                    <div className="col-12 col-md-5 m-1   ">
                        <Card >
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1   ">
                        <Card>
                            <CardBody>
                                <CardTitle>{"Comments"}</CardTitle>
                                <CardText>{comments}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

        );
    }
}
export default Dishdetail;