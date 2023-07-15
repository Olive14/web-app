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

  //DI。コンストラクタインジェクション。
  //どこでもこのfbという変数をプロパティとして用いることができる。、
  constructor(private fb: FormBuilder) {
    this.coffeeForm = this.fb.group(
      {
        name:"ブレンド",                   //テンプレートにある品名：nameと対応
        taste:"バランスの良い口当たり",     //テンプレートにあるテイスト：tasteと対応
        hotcold:"Hot"                     //Hot・Coldのラジオボタン
      }
    )
  }
}
