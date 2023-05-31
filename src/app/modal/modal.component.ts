import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(private modalService: NgbModal) {}
  content = 'hello';

  openModal() {
    const modalRef = this.modalService.open(this.content);
  }
}
