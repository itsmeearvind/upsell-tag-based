<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
  $(document).ready(function(){
    $(document).on('click', '.no_addcart', function(){
      $('.mini-cart').addClass('is-visible');
      $('.upsell_tagBased').addClass('hide');
      $('.upsell_bg').addClass('hide');
    });
    $(document).on('click', '.close', function(){
      $('.upsell_tagBased').addClass('hide');
      $('.upsell_bg').addClass('hide');
    });
    $(document).on('click', '.add-to-cart', function(){
      $('.upsell_tagBased').removeClass('hide');
      $('.upsell_bg').removeClass('hide');
    });
    $(document).on('click', '.cutom_atc', function(){
      $('.upsell_tagBased').addClass('hide');
      $('.upsell_bg').addClass('hide');
    });
  });

</script> 
