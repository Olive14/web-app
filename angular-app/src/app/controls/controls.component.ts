import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  //テンプレートからcoffeeFormというプロパティで参照できるようにする
  coffeeForm!:FormGroup;

  //Hot・Coldの選択肢のラジオボタン要素を配列に格納する
  hotcoldsel = ["Hot", "Cold"];

  //DI。コンストラクタインジェクション。
  //どこでもこのfbという変数をプロパティとして用いることができる。、
  constructor(private fb: FormBuilder) {
    this.coffeeForm = this.fb.group(
      {
        name:"ブレンド",                   //テンプレートにある品名：nameと対応
        taste:"バランスの良い口当たり",     //テンプレートにあるテイスト：tasteと対応
        hotcold:this.hotcoldsel[0]        //Hot・Coldのラジオボタン。0番目のインデクスを使って初期化。
      }
    )
  }
}
