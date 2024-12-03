import { Component,Input } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute,Router, RouterModule }from '@angular/router';
import { Usuario } from './models/usuario';
import { UsuarioService } from './services/usuario.service';
import { SharingDataService } from './services/sharing-data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelpDeskF';
  constructor( private router: Router,
    private service: UsuarioService,
    private sharingData: SharingDataService,
    private authService: AuthService,
  private route: ActivatedRoute) {}

  @Input() users: Usuario[] = [];

  
  get login() {
    return this.authService.user;
  }
  get admin() {
    return this.authService.isAdmin();
  }
  handlerLogout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.handlerLogin();
  }
  handlerLogin() {
    this.sharingData.handlerLoginEventEmitter.subscribe(({ username, password }) => {
      console.log(username + ' ' + password);

      this.authService.loginUser({ username, password }).subscribe({
        next: response => {
          const token = response.token;
          console.log(token);
          const payload = this.authService.getPayload(token);

          const user = { username: payload.sub };
          const login = {
            user,
            isAuth: true,
            isAdmin: payload.isAdmin
          };
          
          this.authService.token = token;
          this.authService.user = login;
          this.router.navigate(['/users/page/0']);
        },
        error: error => {
          if (error.status == 401) {
            Swal.fire('Error en el Login', error.error.message, 'error')
          } else {
            throw error;
          }
        }
      })
    })
  }

}
