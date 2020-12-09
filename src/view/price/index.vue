<template>
  <div class="price-box">
    <div class="title">doge.tc pricing that flexes with you</div>
    <div class="estimator-area">
      <h2 class="estimator-header">Save big as you grow</h2>

      <div class="price-slider-area show-discount">
        <div id="price-slider" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
          <div id="price-slider-handle" class="ui-slider-handle ui-corner-all ui-state-default" tabindex="0" style="left: 92%;">
            <div id="ps-drag-label"></div>
            <div id="ps-click-count-area">
              <span id="ps-click-count">200,000</span> <em>clicks</em>
              <div class="ps-discount-area">Save <span id="ps-discount">50</span>%</div>
            </div>
          </div>
        <div class="ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min" style="width: 92%;"></div></div>

        <div class="slider-estimate">
          <span class="slider-estimate-total">
            You would pay just <span class="total"><span class="dollar">$</span><span id="ps-total">203.00</span></span>
            <p id="pricing-math" class="fineprint">$<span id="ps-base-fee">5.00</span> base fee plus <span id="ps-numbuckets">198</span> "<span id="ps-click-unit">buckets</span>" of <span id="ps-bucket-size">1</span>k clicks, at $<span id="ps-bucket-cost">2</span> ea.</p>
          </span>
          <span class="slider-estimate-beyond">
            At any click count, we've got you covered.
            <p class="fineprint">
              Save even more with our <a href="/pricing/business.html">Business plan</a>
            </p>
          </span>

        </div>

      </div>
    </div>
    <div class="plant-box">
      <div class="price-prefix">Starting at just</div>
      <h3>
        <span class="dollar">$</span>
        <span class="minimum-fee">5</span>
        <em> / month</em>
      </h3>
      <div class="plan-features-area">
        <h4>Includes</h4>
        <ul class="plan-features">
          <li>All our <span class="helptip tipso_style" data-tipso-title="Get all our core features" data-tipso-content="Excludes add-ons:
              API, additional users, and custom domains.">
            features</span>
          </li>
          <li><span class="included-click-amount">50</span> G/month</li>
        </ul>
        <h4>Beyond <span class="included-click-amount">50</span> G</h4>
        <ul class="plan-features">
          <li>Pay only for clicks you use</li>
          <li>$<span class="bucket-cost">2</span> per <span class="bucket-size">25</span> G</li>
            <li class="discount-mention">Save <span class="max-discount">25</span>% with volume discounts</li>
        </ul>
        <a href="https://my.geni.us/join" class="button go-plan-1">
          <span class="signup-prompt">Start Free 14-day Trial</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
<style scoped lang="scss">
  .price-box{
    width: 940px;
    margin: 50px auto;
    padding-bottom: 50px;
    .title{
      width: 100%;
      font-size: 36px;
      font-weight: 300;
      text-align: center;
    }

    .estimator-area{
      width: 100%;
      height: 100px;
      margin-top: 80px;
      text-align: center;
      #price-slider {
        background: #f0f0f0;
        width: 80%;
        position: relative;
        height: 4px;
        margin: 0 auto 0 auto;
      }
    }

    .plant-box{
      max-width: 428px;
      font-size: 14px;
      border: 1px solid #e5e5e5;
      background-color: #fff;
      border-radius: 5px;
      display: block;
      vertical-align: top;
      position: relative;
      color: #616161;
      text-align: center;
      box-sizing: border-box;
      margin: 20px auto 18px auto;
      line-height: 1.2em;
      padding: 25px 30px 35px 30px;
      -webkit-box-shadow: 7px 7px 45px -2px rgba(0,0,0,0.13);
      -moz-box-shadow: 7px 7px 45px -2px rgba(0,0,0,0.13);
      box-shadow: 7px 7px 45px -2px rgba(0,0,0,0.13);
      .price-prefix{
        color: #bbb;
        font-weight: 300;
        font-size: 16px;
        margin: 10px 0 10px 0;
      }
      h3{
        font-family: "open sans",sans-serif;
        font-size: 72px;
        color: #444;
        font-weight: 600;
        line-height: .9;
        .dollar{
          font-weight: 300;
          font-size: 24px;
          vertical-align: middle;
        }
        em{
          font-style: normal;
          font-size: 12px;
          font-weight: 300;
        }
      }
      .plan-features-area{
        margin: 35px 0 50px 0;
        h4{
          text-align: left;
          font-family: "open sans",sans-serif;
          font-size: 16px;
          color: #bbb;
          text-transform: none;
          border-bottom: 1px solid #d8d8d8;
          padding: 0 0 5px 0;
          font-weight: 300;
          margin: 30px 0 20px 0;
          line-height: 1.4em;
        }
        .plan-features {
          box-sizing: border-box;
          padding-left: 0;
          margin: 0;
          text-align: left;
          list-style: none;
          li{
            padding: 0 0 0 50px;
            font-size: 16px;
            font-weight: 300;
            margin-bottom: .8em;
            line-height: 1.2em;
            &::before {
              content: "\2022";
              font-size: 30px;
              vertical-align: middle;
              color: #00b9ee;
              font-weight: bold;
              display: inline-block;
              width: .8em;
              margin-left: -0.8em;
            }
          }
        }
        a.button {
          color:#fff;
          max-width: 250px;
          margin: 50px auto 0 auto;
          display: block;
          font-family: "open sans",sans-serif;
          text-align: center;
          font-size: 15px;
          font-weight: 400;
          line-height: 39px;
          border-radius: 3px;
          border: 0;
          outline: 0;
          background: #00b9ee;
        }
      }
      
    }
  }

</style>