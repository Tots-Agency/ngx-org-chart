import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    parentNode: {
      avatar: {
        imageUrl: 'https://i.pravatar.cc/300',
        label: 'Test'
      },
      info: {
        fullname: 'Cevahir Topkapı',
        title: 'Chief Director'
      }
    },
    childNodes: [
      {
        parentNode: {
          avatar: {
            imageUrl: 'https://i.pravatar.cc/300',
            label: 'Demo'
          },
          info: {
            fullname: 'Ali Dümen',
            title: 'Chief Engineer'
          }
        },
        childNodes: [
          {
            parentNode: {
              avatar: {
                imageUrl: 'https://i.pravatar.cc/300',
                label: 'Tado'
              },
              info: {
                fullname: 'Ceylan Demir',
                title: 'CTO'
              }
            }
          },
          {
            parentNode: {
              avatar: {
                imageUrl: 'https://i.pravatar.cc/300',
                label: 'Tado'
              },
              info: {
                fullname: 'Ahmet Demir',
                title: 'CFO'
              }
            }
          }
        ]
      },
      {
        parentNode: {
          avatar: {
            imageUrl: 'https://i.pravatar.cc/300',
            label: 'Deneme'
          },
          info: {
            fullname: 'Serpil Domaç',
            title: 'Chief Technician'
          },
        },
        childNodes: [
          {
            parentNode: {
              avatar: {
                imageUrl: 'https://i.pravatar.cc/300',
                label: 'Tado'
              },
              info: {
                fullname: 'Ceylan Demir',
                title: 'CTO'
              }
            }
          },
          {
            parentNode: {
              avatar: {
                imageUrl: 'https://i.pravatar.cc/300',
                label: 'Tado'
              },
              info: {
                fullname: 'Ahmet Demir',
                title: 'CFO'
              }
            }
          }
        ]
      }
    ]
  };
}
