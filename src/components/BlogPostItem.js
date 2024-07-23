import React from 'react';
import { Card } from 'react-bootstrap';
import './BlogPostItem.css'; // Import the CSS file

const BlogPostItem = ({ post, onClick }) => {
  return (
    <Card className="mb-3" onClick={onClick} style={{ cursor: 'pointer' }}>
      {post.urlToImage && (
        <Card.Img variant="top" src={post.urlToImage} alt={post.title} className="blog-post-image" />
      )}
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.description}</Card.Text>
        <Card.Footer className="text-muted">{new Date(post.publishedAt).toLocaleDateString()}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default BlogPostItem;
