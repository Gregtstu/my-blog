import {Component, OnInit} from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../settings/services/api.service";
import {IPosts} from "../../settings/interfaces/iposts";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Поле основного контента',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Times New Roman',
    toolbarHiddenButtons: [
      [
        // 'undo',
        // 'redo',
        // 'bold',
        // 'italic',
        'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        // 'justifyLeft',
        // 'justifyCenter',
        // 'justifyRight',
        // 'justifyFull',
        'indent',
        'outdent',
        // 'insertUnorderedList',
        // 'insertOrderedList',
        // 'heading',
        // 'fontName'
      ],
      [
        // 'fontSize',
        // 'textColor',
        // 'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        // 'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ]

  };


  public config2: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Поле для фото',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Times New Roman',
    toolbarHiddenButtons: [
      [
        // 'undo',
        // 'redo',
        'bold',
        'italic',
        'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        // 'justifyLeft',
        // 'justifyCenter',
        // 'justifyRight',
        // 'justifyFull',
        'indent',
        'outdent',
        'insertUnorderedList',
        'insertOrderedList',
        'heading',
        'fontName'
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        // 'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ]

  };

  public formEditor!:FormGroup;
  constructor(private formBuilder:FormBuilder, private api:ApiService) {
  }

  ngOnInit(): void {
    this.formEditor = this.formBuilder.group({
      select: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      img: ['', Validators.required],
    });
  }

  submit() {
    if (this.formEditor.invalid) {
      return;
    }
    const post:IPosts = {
      select: this.formEditor.value.select,
      title: this.formEditor.value.title,
      foto: this.formEditor.value.foto,
      content: this.formEditor.value.content,
      img: this.formEditor.value.img,
      favorite: false,
      data: new Date(),
    }

    this.api.addPost(post).subscribe({
      next: (res)=> {
        this.formEditor.reset();
        alert('Ваш пост успешно опубликован на главной странице!');
      },
      error: (err)=> {
        alert('ОШИБКА!!! Пост не опубликован!!!');
      }
    })
  }
}
