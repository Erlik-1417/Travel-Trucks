import { useState } from 'react';
import css from './Gallery.module.css';
export default function Gallery({ images = [], name }) {
  const [selected, setSelected] = useState(0);
  const active = images[selected] || images[0];
  if (!active) {
    return <div className={css.missing}>No photos available</div>;
  }

  function selectPhoto(index) {
    setSelected(index);
  }

  return (
    <section className={css.gallery} aria-label={`${name} photo gallery`}>
      <div className={css.main}>
        <img
          src={active.original || active.thumb}
          alt={`${name}, photo ${selected + 1}`}
        />
      </div>

      <div className={css.thumbnails}>
        {images.map((image, index) => {
          let buttonClass = css.thumbnail;

          if (index === selected) {
            buttonClass = css.selected;
          }

          return (
            <button
              key={image.original || index}
              type="button"
              className={buttonClass}
              aria-label={`View photo ${index + 1}`}
              aria-pressed={index === selected}
              onClick={() => selectPhoto(index)}
            >
              <img src={image.thumb || image.original} alt="" loading="lazy" />
            </button>
          );
        })}
      </div>
    </section>
  );
}
