let textarea = document.querySelector('.textarea');

/** 入力中の文字数 */
let string_num = document.querySelector('.string_num');

//テキスト入力する度にonKeyUp()を実行する
textarea.addEventListener('keyup', onKeyUp);

function onKeyUp() {
    //入力されたテキスト
    const inputText = textarea.value;
    //文字数を反映
    string_num.innerText = inputText.length;
}
