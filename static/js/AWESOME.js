fetch("../static/Products/data.json")
  .then(response => response.json())
  .then(_data => {
    function _add(_id, _color, _div){
    try{
      console.log(_data[_id]);
      const _card = document.createElement('div');
      _card.classList.add("card-wrapper");
      _card.classList.add(`${_color}-card`);
      if(_data[_id].is_new == true){
        _card.classList.add("new1");
      }else{
        _card.classList.add("new0");
      }
      if(_data[_id].is_it_in_sales == true){
        _card.classList.add("sales1");
      }else{
        _card.classList.add("sales0");
      }
      if(_data[_id].is_favorite == true){
        _card.classList.add("favorite1");
      }else{
        _card.classList.add("favorite0");
      }
      _card.classList.add(_data[_id].category);
      _card.classList.add(_data[_id].type);
      if(_data[_id].is_it_possible_to_buy == true){
        _card.classList.add("possible-buy");
      }else{
        _card.classList.add("impossible-buy");
      }
      _card.addEventListener("click", function(){
        open_product_page(_id);
      });
      _card.setAttribute("id", _id);
      _card.innerHTML = `
        <div class="card">
            <img src="${_data[_id].product_img_src_1}" class="card-image">
            <p class="card-name" id="regular">${_data[_id].product_name}</p>
            <div class="card-producer">
                <img src="${_data[_id].brand_image}" class="card-producer-image">
                <p class="card-producer-name" id="regular">${_data[_id].brand}</p>
            </div>
            <div class="card-rate-and-price-and-favorite">
                <div class="card-rate-and-favorite">
                    <div class="card-rate">
                        <img src="../static/icons/Dark/Star.svg" class="card-rate-star">
                        <p class="card-rate-p" id="regular">${_data[_id].product_rating}</p>
                    </div>
                    <div class="old-price" id="limelight">${_data[_id].old_price}</div>
                </div>
                <div class="card-price" id="limelight">${_data[_id].product_price}</div>
            </div>
            <div class="card-delivery" id="regular"><img src="../static/icons/Light/Clock (1).svg">${_data[_id].product_delivery_date}</div>
            <div class="card-label">
                <div class="card-label-new" id="limelight"><p>NEW</p></div>
                <div class="card-label-percents" id="limelight"><p>${_data[_id].sales_percent}</p></div>
                <div class="card-label-season" id="limelight"><p>${_data[_id].season}</p></div>
                <div class="card-label-star"><img src="../static/icons/Light/Star (1).svg"></div>
            </div>
        </div>
      `
      document.querySelector(`.${_div}`).appendChild(_card);
    } catch (e) {
      console.log("Error :)");
    } finally {
      console.log("Loaded :) " [_id]);
    }
  }
  function open_product_page(_id){
    window.location.href = `product?id=${_id}`;
  }
    _add("apple_iphone_17", "brown", "cart");
    _add("Lego_Minecraft_Mini_Biomes", "brown", "cart");
    _add("sony_playstation_5", "brown", "cart");
    _add("Movavi_School_Dino_Cap", "brown", "cart");


    _add("Lego_Technic_Jeep_Wrangler_Rubicon_SUV", "green", "cardss")
    _add("Adidas_SUPERNOVA_RISE_3_RUNNING_SHOES", "green", "cardss")
    _add("Adidas_Tennis_Climacool_Freelift_T-Shirt_Pro", "green", "cardss")
    _add("Apple_Macbook_Neo", "green", "cardss")
    _add("Lego_Minecraft_Mini_Biomes", "green", "cardss");
    _add("Movavi_School_Dino_Cap", "green", "cardss");
    _add("Samsung_65_inch_Class_Neo_QLED_QN990F", "green", "cardss")
    _add("Adidas_WORKOUT_ESSENTIALS_BASE_WOVEN_SHORT", "green", "cardss")
    _add("IKEA_JÄTTEBO", "green", "cardss")
    _add("sony_playstation_5", "green", "cardss")
    _add("apple_iphone_17_pro", "green", "cardss")
    _add("IKEA_NEIDEN", "green", "cardss")
    _add("IKEA_KRYLBO", "green", "cardss")
    _add("Samsung_Bespoke_AI_3_Door_French_Door", "green", "cardss")
    _add("Apple_Watch_Series_11", "green", "cardss")
    _add("Apple_Iphone_Air", "green", "cardss")

    _add("sony_playstation_5", "green", "products-block-container")
    _add("apple_iphone_17_pro", "green", "products-block-container")
    _add("apple_iphone_17", "green", "products-block-container")
    _add("Lego_Technic_Jeep_Wrangler_Rubicon_SUV", "green", "products-block-container")
    _add("Lego_DC_Arkham_Asylum", "green", "products-block-container")
    _add("Lego_Minecraft_Mini_Biomes", "green", "products-block-container")
    _add("Adidas_Adizero_EVO_SL_Shoes", "green", "products-block-container")
    _add("Adidas_SUPERNOVA_RISE_3_RUNNING_SHOES", "green", "products-block-container")
    _add("Adidas_WORKOUT_ESSENTIALS_BASE_WOVEN_SHORT", "green", "products-block-container")
    _add("Adidas_Tennis_Climacool_Freelift_T-Shirt_Pro", "green", "products-block-container")
    _add("Movavi_School_Dino_Cap", "green", "products-block-container")
    _add("Apple_Macbook_Neo", "green", "products-block-container")
    _add("IKEA_JÄTTEBO", "green", "products-block-container")
    _add("IKEA_NEIDEN", "green", "products-block-container")
    _add("IKEA_SANELA", "green", "products-block-container")
    _add("IKEA_KRYLBO", "green", "products-block-container")
    _add("IKEA_SKOGSTA", "green", "products-block-container")
    _add("IKEA_DEKAD", "green", "products-block-container")
    _add("Samsung_65_inch_Class_Neo_QLED_QN990F", "green", "products-block-container")
    _add("Samsung_Bespoke_AI_3_Door_French_Door", "green", "products-block-container")
    _add("Apple_Watch_Series_11", "green", "products-block-container")
    _add("Apple_Iphone_Air", "green", "products-block-container")

    _add("Apple_Macbook_Neo", "green", "cc_for_you")
    _add("Lego_DC_Arkham_Asylum", "green", "cc_for_you")
    _add("sony_playstation_5", "green", "cc_for_you")
    _add("Movavi_School_Dino_Cap", "green", "cc_for_you")
    _add("apple_iphone_17", "green", "cc_for_you")
    _add("apple_iphone_17_pro", "green", "cc_for_you")
    _add("Lego_Minecraft_Mini_Biomes", "green", "cc_for_you")
    _add("Lego_Technic_Jeep_Wrangler_Rubicon_SUV", "green", "cc_for_you")
    _add("Samsung_Bespoke_AI_3_Door_French_Door", "green", "cc_for_you")

    _add("apple_iphone_17_pro", "green", "cc_for_trends")
    _add("Lego_Minecraft_Mini_Biomes", "green", "cc_for_trends")
    _add("Adidas_SUPERNOVA_RISE_3_RUNNING_SHOES", "green", "cc_for_trends")
    _add("Movavi_School_Dino_Cap", "green", "cc_for_trends")
    _add("Apple_Macbook_Neo", "green", "cc_for_trends")
    _add("IKEA_NEIDEN", "green", "cc_for_trends")
    _add("Adidas_WORKOUT_ESSENTIALS_BASE_WOVEN_SHORT", "green", "cc_for_trends")
    _add("Lego_Technic_Jeep_Wrangler_Rubicon_SUV", "green", "cc_for_trends")

    _add("Adidas_Tennis_Climacool_Freelift_T-Shirt_Pro", "brown", "about-SET-container-1")
    _add("Movavi_School_Dino_Cap", "brown", "about-SET-container-1")
    _add("Adidas_WORKOUT_ESSENTIALS_BASE_WOVEN_SHORT", "brown", "about-SET-container-1")
    _add("Adidas_SUPERNOVA_RISE_3_RUNNING_SHOES", "brown", "about-SET-container-1")
    _add("Adidas_Adizero_EVO_SL_Shoes", "brown", "about-SET-container-1")

    _add("Adidas_Tennis_Climacool_Freelift_T-Shirt_Pro", "green", "about-SET-container-2")
    _add("apple_iphone_17_pro", "green", "about-SET-container-2")
    _add("Movavi_School_Dino_Cap", "green", "about-SET-container-2")
    _add("Apple_Watch_Series_11", "green", "about-SET-container-2")
    _add("Adidas_SUPERNOVA_RISE_3_RUNNING_SHOES", "green", "about-SET-container-2")

    _add("IKEA_DEKAD", "brown", "about-SET-container-3")
    _add("IKEA_SANELA", "brown", "about-SET-container-3")
    _add("IKEA_JÄTTEBO", "brown", "about-SET-container-3")
    _add("IKEA_NEIDEN", "brown", "about-SET-container-3")
    _add("IKEA_SKOGSTA", "brown", "about-SET-container-3")

    _add("apple_iphone_17_pro", "white", "pbc_")
    _add("Lego_Minecraft_Mini_Biomes", "white", "pbc_")
    _add("Adidas_SUPERNOVA_RISE_3_RUNNING_SHOES", "white", "pbc_")
    _add("Movavi_School_Dino_Cap", "white", "pbc_")
    _add("Apple_Macbook_Neo", "white", "pbc_")
    _add("IKEA_NEIDEN", "white", "pbc_")
    _add("Adidas_WORKOUT_ESSENTIALS_BASE_WOVEN_SHORT", "white", "pbc_")
    _add("sony_playstation_5", "white", "pbc_")

    _add("Apple_Macbook_Neo", "white", "fbc_")
    _add("Lego_DC_Arkham_Asylum", "white", "fbc_")
    _add("sony_playstation_5", "white", "fbc_")
    _add("Movavi_School_Dino_Cap", "white", "fbc_")
    _add("apple_iphone_17", "white", "fbc_")
    _add("apple_iphone_17_pro", "white", "fbc_")
    _add("Lego_Minecraft_Mini_Biomes", "white", "fbc_")
    _add("Lego_Technic_Jeep_Wrangler_Rubicon_SUV", "white", "fbc_")
    _add("Samsung_Bespoke_AI_3_Door_French_Door", "white", "fbc_")

    const params = new URLSearchParams(window.location.search);
    const product_id = params.get('id');
    try{
      _add(_data[product_id].related.rel1, "green", "pp-related-container");
      _add(_data[product_id].related.rel1, "green", "pp-related-container-m");
    }catch{}
    try{
      _add(_data[product_id].related.rel2, "green", "pp-related-container");
      _add(_data[product_id].related.rel2, "green", "pp-related-container-m");
    }catch{}
    try{
      _add(_data[product_id].related.rel3, "green", "pp-related-container");
      _add(_data[product_id].related.rel3, "green", "pp-related-container-m");
    }catch{}
    try{
      _add(_data[product_id].related.rel4, "green", "pp-related-container");
      _add(_data[product_id].related.rel4, "green", "pp-related-container-m");
    }catch{}
    try{
      _add(_data[product_id].related.rel5, "green", "pp-related-container");
      _add(_data[product_id].related.rel5, "green", "pp-related-container-m");
    }catch{}
  });