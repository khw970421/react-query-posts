import './SkeletonPost.scss'

const SkeletonPost = () => {
  return (
    <div className="skeleton-post-wrapper">
      <header className="skeleton-post-header">
        <div className="skeleton-post-title skeleton-animation" />
        <div className="skeleton-post-user skeleton-animation" />
      </header>
      <section className="skeleton-post-section skeleton-animation" />
    </div>
  );
};

export default SkeletonPost;