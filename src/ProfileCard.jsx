function ProfileCard({ title, handle, imageSrc, alt, description }) {
  console.log(title, handle);

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={imageSrc} alt={alt} />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
          <p className="content">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
