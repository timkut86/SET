fetch("../static/Products/data.json")
  .then(response => response.json())
  .then(_data => {
      const params = new URLSearchParams(window.location.search);
      const product_id = params.get('id');
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
      document.querySelector(".old_pr").classList.add(`sales${sales_}`)
      document.querySelector(".old_prm").classList.add(`sales${sales_}`)
      document.querySelector(".ppiplopd").classList.add(`new${new_}`);
      document.querySelector(".ppiplopd").classList.add(`sales${sales_}`);
      document.querySelector(".ppblfavd").classList.add(`favorite${favotite}`);
      console.log(`The ${_data[product_id].product_name} is loaded.`);
      document.querySelector("#pp_t").innerHTML = `${_data[product_id].product_name}`;
      document.querySelector(".ppb1-info-price-label-sales").innerHTML = `${_data[product_id].sales_percent}`;
      document.querySelector(".old_pr").innerHTML = `${_data[product_id].old_price}`;
      document.querySelector(".pp__price").innerHTML = `${_data[product_id].product_price}`;
      document.querySelector(".pp_p_r").innerHTML = `${_data[product_id].product_rating}`;
      document.querySelector(".pp_dd").innerHTML = `${_data[product_id].product_delivery_date}`;
      document.querySelector(".pp__pr").innerHTML = `   <p id="regular">Manufacturer: <img src="${_data[product_id].brand_image}">${_data[product_id].brand}</p>
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
                                                        <p id="regular">${_data[product_id].properties.prop10}</p>`;
      document.querySelector(".pp_p1_div").src = `${_data[product_id].product_img_src_1}`;
      document.querySelector(".pp_p2_div").src = `${_data[product_id].product_img_src_2}`;
      document.querySelector(".pp_p3_div").src = `${_data[product_id].product_img_src_3}`;
      document.querySelector(".pp_p4_div").src = `${_data[product_id].product_img_src_4}`;
      document.querySelector(".pp_p5_div").src = `../static/Products/star/video.svg`;
      document.querySelector(".pp__description").innerHTML = `${_data[product_id].description}`;

      document.querySelector("#pl_name").innerHTML = `${_data[product_id].product_name}`;
      document.querySelector(".plc_photo1").innerHTML = `<img src="${_data[product_id].product_img_src_1}">`;
      document.querySelector(".plc_photo2").innerHTML = `<img src="${_data[product_id].product_img_src_2}">`;
      document.querySelector(".plc_photo3").innerHTML = `<img src="${_data[product_id].product_img_src_3}">`;
      document.querySelector(".plc_photo4").innerHTML = `<img src="${_data[product_id].product_img_src_4}">`;
      document.querySelector(".plc_photo5").innerHTML = `<video src="${_data[product_id].product_video}" controls poster="${_data[product_id].product_img_src_1}"></video>`;

      document.querySelector(".pp___rating").innerHTML = `${_data[product_id].product_rating}`;
      document.querySelector(".pp-reviews-container").innerHTML = ` <div class="review">
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
                                                                </div>`;
      document.querySelector(".pp-m-photo1").innerHTML = `<img src="${_data[product_id].product_img_src_1}">`;
      document.querySelector(".pp-m-photo2").innerHTML = `<img src="${_data[product_id].product_img_src_2}">`;
      document.querySelector(".pp-m-photo3").innerHTML = `<img src="${_data[product_id].product_img_src_3}">`;
      document.querySelector(".pp-m-photo4").innerHTML = `<img src="${_data[product_id].product_img_src_4}">`;
      document.querySelector(".pp-m-photo5").innerHTML = `<img src="../static/Products/star/video.svg">`;
      document.querySelector(".ppiplopdm").classList.add(`new${new_}`);
      document.querySelector(".ppiplopdm").classList.add(`sales${sales_}`);
      document.querySelector(".ppblfavdm").classList.add(`favorite${favotite}`);
      console.log(`The ${_data[product_id].product_name} is loaded.`);
      document.querySelector(".pp_tm").innerHTML = `${_data[product_id].product_name}`;
      document.querySelector(".ppb1-info-price-label-salesm").innerHTML = `${_data[product_id].sales_percent}`;
      document.querySelector(".old_prm").innerHTML = `${_data[product_id].old_price}`;
      document.querySelector(".pp__pricem").innerHTML = `<p id="Limelight">${_data[product_id].product_price}</p>`;
      document.querySelector(".pp_p_rm").innerHTML = `${_data[product_id].product_rating}`;
      document.querySelector(".pp_ddm").innerHTML = `${_data[product_id].product_delivery_date}`;
      document.querySelector(".pp__prm").innerHTML = `  <p id="regular">Manufacturer: <img src="${_data[product_id].brand_image}">${_data[product_id].brand}</p>
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
                                                        <p id="regular">${_data[product_id].properties.prop10}</p>`;
      document.querySelector(".pp__descriptionm").innerHTML = `${_data[product_id].description}`;
});