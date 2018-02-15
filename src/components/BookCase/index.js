import React from 'react';
import './styles.css';

const BookCase = function(props) {
    return (
      <div className="bookcase">
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.title}</h2>

          <div className="bookshelf-books">
            <ol className="books-grid">
              {props.children}
            </ol>
          </div>
        </div>
      </div>
    );
}

export default BookCase;