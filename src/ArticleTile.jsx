import React from "react";
import { Card } from "react-bootstrap"

const ArticleTile = ({article}) => {
  const rawDate = article.publishDate
  const prettyDate = rawDate.getDate() + "/" + rawDate.getMonth() + "/" + rawDate.getYear()

  return (
  <Card style={{ minWidth: '12rem', margin: '10px', borderRadius: "0.5rem" }}>
    <Card.Img variant="top" src="https://via.placeholder.com/100x70.png" style={{borderRadius: "0.5rem 0.5rem 0 0"}} />
    <Card.Body>
      <Card.Title>{article.title}</Card.Title>
      <Card.Text style={{maxHeight: "4.5rem", overflow: "hidden"}}>
        {article.text}
      </Card.Text>
      <span style={{fontSize: "0.8rem"}}>Written by: {article.author}  |  {prettyDate}</span>
    </Card.Body>
  </Card>
)}

export default ArticleTile;