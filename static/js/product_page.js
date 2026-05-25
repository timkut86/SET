fetch("../static/Products/data.json")
  .then(response => response.json())
  .then(_data => {
      product_id = localStorage.getItem('product_id');
      localStorage.setItem('product_id', product_id);
      console.log(_data)
      var new_ = 0;
      var sales_ = 0;
      var favotite = 0;
      if (_data[product_id].is_new == true){
        new_ = 1;
      }
      if (_data[product_id].is_it_in_sales == true){
        sales_ = 1;
      }
      if(_data[product_id].is_favorite == true){
        favotite = 1;
      }
      const page = `
              <main class="product-page-desktop green">
                  <div class="product-page-block-1">
                      <div class="ppb1-info">
                          <h1>${_data[product_id].product_name}</h1>
                          <div class="ppb1-info-price">
                              <div class="ppb1-info-price-labels-and-oldprice new${new_} sales${sales_}">
                                  <div class="ppb1-info-price-label-new" id="Limelight">NEW</div>
                                  <div class="ppb1-info-price-label-sales" id="Limelight">${_data[product_id].sales_percent}</div><p id="Limelight">${_data[product_id].old_price}</p>
                              </div>
                              <div class="ppb1-info-price-price">
                                  <h2>${_data[product_id].product_price}</h2>
                              </div>
                          </div>
                          <div class="ppb1-info-buttons">
                              <button class="black" id="regular">Add to Cart</button>
                              <button class="black favorite${favotite}"><img src="../static/icons/Light/Star.svg"></button>
                          </div>
                          <div class="ppb1-info-rating-and-delivery">
                              <div class="ppb1-info-rating">
                                  <img src="../static/icons/Dark/Star.svg">
                                  <p id="regular">${_data[product_id].product_rating}</p>
                              </div>
                              <div class="ppb1-info-delivery">
                                  <img src="../static/icons/Dark/Clock.svg">
                                  <p id="regular">${_data[product_id].product_delivery_date}</p>
                              </div>
                          </div>
                      </div>
                      <div class="ppb1-properties">
                          <h2>Properties</h2>
                          <p id="regular">
                                <p id="regular">by <img src="${_data[_id].brand_image}">${_data[product_id].brand}</p>
                                <p id="regular">Category: ${_data[product_id].category}</p>
                                <p id="regular">Type: ${_data[product_id].type}</p>
                                <p id="regular">${_data[product_id].properties.prop1}</p>
                                <p id="regular">${_data[product_id].properties.prop2}</p>
                                <p id="regular">${_data[product_id].properties.prop3}</p>
                                <p id="regular">${_data[product_id].properties.prop4}</p>
                                <p id="regular">${_data[product_id].properties.prop5}</p>
                                <p id="regular">${_data[product_id].properties.prop6}</p>
                                <p id="regular">${_data[product_id].properties.prop7}</p>
                                <p id="regular">${_data[product_id].properties.prop8}</p>
                                <p id="regular">${_data[product_id].properties.prop9}</p>
                                <p id="regular">${_data[product_id].properties.prop10}</p>
                          </p>
                      </div>
                  </div>
                  <div class="product-page-block-2">
                      <div class="ppb2-photos">
                            <img id="p1" src="${_data[product_id].product_img_src_1}" onclick="window.location.href = 'photos_looking';">
                            <img id="p2" src="${_data[product_id].product_img_src_2}" onclick="window.location.href = 'photos_looking';">
                            <img id="p3" src="${_data[product_id].product_img_src_3}" onclick="window.location.href = 'photos_looking';">
                            <img id="p4" src="${_data[product_id].product_img_src_4}" onclick="window.location.href = 'photos_looking';">
                            <img id="p5" src="../static/Products/star/video.svg" onclick="window.location.href = 'photos_looking';">
                      </div>
                      <div class="ppb2-description">
                          <h2>Description</h2>
                          <p id="regular">${_data[product_id].description}</p>
                      </div>
                  </div>
              </main>
              <main class="product-page-mobile green">
                  <div class="pp-m-photos">
                      <div class="pp-m-photo" id="p1m" onclick="window.location.href = 'photos_looking';"><img src="${_data[product_id].product_img_src_1}"></div>
                      <div class="pp-m-photo" id="p2m" onclick="window.location.href = 'photos_looking';"><img src="${_data[product_id].product_img_src_2}"></div>
                      <div class="pp-m-photo" id="p3m" onclick="window.location.href = 'photos_looking';"><img src="${_data[product_id].product_img_src_3}"></div>
                      <div class="pp-m-photo" id="p4m" onclick="window.location.href = 'photos_looking';"><img src="${_data[product_id].product_img_src_4}"></div>
                      <div class="pp-m-photo" id="p5m" onclick="window.location.href = 'photos_looking';"><img src="../static/Products/star/video.svg"></div>
                  </div>
                  <h1>${_data[product_id].product_name}</h1>
                  <div class="pp-m-labels-and-price">
                      <div class="pp-m-labels-and-old-price">
                          <div class="pp-m-labels">
                              <div class="ppb1-info-price-label-new" id="Limelight">NEW</div>
                                  <div class="ppb1-info-price-label-sales" id="Limelight">${_data[product_id].sales_percent}</div>
                          </div>
                          <div class="pp-m-old-price">
                              <p id="Limelight">${_data[product_id].old_price}</p>
                          </div>
                      </div>
                      <div class="pp-m-price"><p id="Limelight">${_data[product_id].product_price}</p></div>
                  </div>
                  <div class="pp-m-buttons">
                      <button class="black" id="regular">Add to Cart</button>
                      <button class="black favorite${favotite}"><img src="../static/icons/Light/Star.svg"></button>
                  </div>
                  <div class="pp-m-rating-and-delivery">
                      <div class="ppb1-info-rating">
                          <img src="../static/icons/Dark/Star.svg">
                          <p id="regular">5.0</p>
                      </div>
                      <div class="ppb1-info-delivery">
                          <img src="../static/icons/Dark/Clock.svg">
                          <p id="regular">07/13/2026</p>
                      </div>
                  </div>
                  <div class="pp-m-description">
                      <h2>Description</h2>
                      <p id="regular">${_data[product_id].description}</p>
                  </div>
                  <div class="pp-m-properties">
                      <h2>Properties</h2>
                      <p id="regular">
                          <ul>
                                <p id="regular">Category: ${_data[product_id].category}</p>
                                <p id="regular">Type: ${_data[product_id].type}</p>
                                <p id="regular">${_data[product_id].properties.prop1}</p>
                                <p id="regular">${_data[product_id].properties.prop2}</p>
                                <p id="regular">${_data[product_id].properties.prop3}</p>
                                <p id="regular">${_data[product_id].properties.prop4}</p>
                                <p id="regular">${_data[product_id].properties.prop5}</p>
                                <p id="regular">${_data[product_id].properties.prop6}</p>
                                <p id="regular">${_data[product_id].properties.prop7}</p>
                                <p id="regular">${_data[product_id].properties.prop8}</p>
                                <p id="regular">${_data[product_id].properties.prop9}</p>
                                <p id="regular">${_data[product_id].properties.prop10}</p>
                          </ul>
                      </p>
                  </div>
              </main>
              <div class="pp-related-desktop brown">
                  <h2>Related</h2>
                  <div class="pp-related-container"></div>
              </div>
              <div class="pp-related-mobile brown">
                  <h2>Related</h2>
                  <div class="pp-related-container-m">
                  </div>
              </div>
              <div class="pp-reviews green">
                  <div class="reviews-title">
                      <h2>Reviews</h2>
                      <div class="pp-review-rate">
                          <img src="../static/icons/Dark/Star.svg">
                          <p id="limelight">${_data[product_id].product_rating}</p>
                      </div>
                      <button class="black" id="regular">Write a review</button>
                  </div>
                  <div class="pp-reviews-container">
                      <div class="review">
                          <div class="review-header">
                              <div class="review-name">
                                  <img src="">
                                  <p id="regular">${_data[product_id].reviews.r1.name}</p>
                              </div>
                              <div class="review-rating">
                                  <img src="../static/icons/Dark/Star.svg">
                                  <p id="limelight">${_data[product_id].reviews.r1.rate}</p>
                              </div>
                          </div>
                          <p id="regular">${_data[product_id].reviews.r1.review}</p>
                      </div>
                      <div class="review">
                          <div class="review-header">
                              <div class="review-name">
                                  <img src="">
                                  <p id="regular">${_data[product_id].reviews.r2.name}</p>
                              </div>
                              <div class="review-rating">
                                  <img src="../static/icons/Dark/Star.svg">
                                  <p id="limelight">${_data[product_id].reviews.r2.rate}</p>
                              </div>
                          </div>
                          <p id="regular">${_data[product_id].reviews.r2.review}</p>
                      </div>
                      <div class="review">
                          <div class="review-header">
                              <div class="review-name">
                                  <img src="">
                                  <p id="regular">${_data[product_id].reviews.r3.name}</p>
                              </div>
                              <div class="review-rating">
                                  <img src="../static/icons/Dark/Star.svg">
                                  <p id="limelight">${_data[product_id].reviews.r3.rate}</p>
                              </div>
                          </div>
                          <p id="regular">${_data[product_id].reviews.r3.review}</p>
                      </div>
                  </div>
              </div>
        `;
      document.querySelector(".product-page").innerHTML = page; 
      console.log(`The ${_data[product_id].product_name} is loaded.`);
});