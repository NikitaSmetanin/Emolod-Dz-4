import type {BlogContainerType} from '../../../types';
import './style.css';

type BlogProps = {
    blog: BlogContainerType;
};

const BlogContainer = (props: BlogProps) => {
    const { blog } = props;

    return (    
        <div className="blog-container">
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-publication-date">
                {blog.publicationDate.toLocaleDateString()}
            </p>
            <p className="blog-description">{blog.description}</p>
            <a className="blog-link" href={blog.fullArticleLink} target="_blank" rel="noopener noreferrer">
                Read Full Article
            </a>
        </div>
    );
}
    

export default BlogContainer;
