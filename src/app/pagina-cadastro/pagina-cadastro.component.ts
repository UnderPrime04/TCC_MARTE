import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-cadastro',
  templateUrl: './pagina-cadastro.component.html',
  styleUrls: ['./pagina-cadastro.component.css']
})
export class PaginaCadastroComponent {
  mostrarComponentes(value: string) {
    const componentesPessoaFisica = document.getElementById('componentes-pessoas-fisica');
    const componentesPessoaJuridica = document.getElementById('componentes-pessoas-juridica');
  
    if (componentesPessoaFisica && componentesPessoaJuridica) {
      if (value === 'pessoa-fisica') {
        componentesPessoaFisica.style.display = 'block';
        componentesPessoaJuridica.style.display = 'none';
      } else if (value === 'pessoa-juridica') {
        componentesPessoaFisica.style.display = 'none';
        componentesPessoaJuridica.style.display = 'block';
      }
    }
  }
}



