$subTitle = $('#sub-title p'); // 変数

// $subTitle.text('テスト');
$subTitle.css('color', 'red');

// 演算
// $subTitle.text(10 + 10);
// $subTitle.text('test' + 'foo');

// if文、for文
console.log($subTitle.text());

if ($subTitle.text() < 10) {
  $subTitle.text('10未満です！');
} else {
  $subTitle.text('10以上です！');
}
// if ($subTitle.text())