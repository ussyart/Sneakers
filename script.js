//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: '#555',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#bbb',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});

$(function(){

    setTimeout(function(){
    $('#settimeout').fadeIn(1000);
  },2300);

  /*ハンバーガーメニューをクリックすると、３本線が回転しながらXになる*/
  $(".openbtn").click(function () {
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与

　});

　/*ハンバーガーメニューをクリックすると、メニュー画面を開く*/
　$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
　});

  /*スライドショー設定*/
  $('.slider').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 4,//スライドを画面に3枚見せる
		slidesToScroll: 4,//1回のスクロールで3枚の写真を移動して見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		dots: false,//下部ドットナビゲーションの表示
		responsive: [
			{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 3,//スライドを画面に2枚見せる
				slidesToScroll: 3,//1回のスクロールで2枚の写真を移動して見せる
			}
		},
		{
			breakpoint: 426,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1,//スライドを画面に1枚見せる
				slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
			}
		}
	]
	});



	// 動きのきっかけとなるアニメーションの名前を定義
  function fadeAnime(){

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeInUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
　　var elemPos = $(this).offset().top-50; //要素より、50px上の
　　var scroll = $(window).scrollTop();
　　var windowHeight = $(window).height();
　　if (scroll >= elemPos - windowHeight){
　　$(this).addClass('fadeIn');
　　// 画面内に入ったらfadeInというクラス名を追記
　　}else{
　　　$(this).removeClass('fadeIn');
　　// 画面外に出たらfadeInというクラス名を外す
　　}
　　});

//関数でまとめることでこの後に違う動きを追加することが出来ます
$('.fadeInDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
　　var elemPos = $(this).offset().top-50; //要素より、50px上の
　　var scroll = $(window).scrollTop();
　　var windowHeight = $(window).height();
　　if (scroll >= elemPos - windowHeight){
　　$(this).addClass('fadeDown');
　　// 画面内に入ったらfadeDownというクラス名を追記
　　}else{
　　　$(this).removeClass('fadeDown');
　　// 画面外に出たらfadeDownというクラス名を外す
　　}
　　});


}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


});
