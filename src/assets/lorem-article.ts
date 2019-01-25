import { Article } from '../app/models/article.model';
import { SectionPiece } from '../app/models/section-piece.model';
import { michael } from './lorem-author';

const loremArticle = new Article(
  'Lorem Ipsum',
  new Date(),
  michael,
  [
    new SectionPiece('', [
      'dolor sit amet, consectetur adipiscing elit. Nunc non lectus sapien. Ut dignissim augue sed ornare volutpat. Phasellus finibus est libero, eu maximus dui egestas eu. Aenean porta nec diam id volutpat. Sed ac ullamcorper ipsum. Phasellus elementum libero turpis, ut vehicula erat consequat et. Donec finibus, ex vel pulvinar consectetur, elit justo rutrum nibh, nec tincidunt eros urna eget magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst.',
      'Nulla aliquet ligula ut fermentum condimentum. Aliquam sagittis pellentesque ante, vitae semper sapien malesuada et. Phasellus in tempus neque. Etiam porttitor posuere accumsan.',
      'Mauris orci justo, sollicitudin ut semper tincidunt, facilisis vitae lorem. Duis ac ex vitae neque finibus ultrices. Morbi at ante convallis enim porttitor sodales. Nam mollis, quam sed blandit aliquam, mi arcu ullamcorper lectus, sed placerat odio erat et sem.',
      'Nullam urna nisl, cursus vitae risus a, tempor tempus libero. Pellentesque pellentesque semper lacus, et tempor diam imperdiet vulputate. Sed consectetur lacus eget eros laoreet, consectetur laoreet lacus lobortis. Nunc tincidunt turpis sit amet mi eleifend egestas. Donec pretium urna at semper interdum.',
      'Pellentesque rutrum ligula erat, eu varius justo lacinia ac. Donec pulvinar ante tortor, in viverra nisl posuere et. Duis cursus augue elementum, luctus orci vitae, posuere sem. Fusce non ligula non arcu accumsan imperdiet. Duis ultrices pulvinar augue vel finibus. Proin eget condimentum ante, sed condimentum arcu. Nulla a quam nunc. Suspendisse mollis hendrerit massa, non vestibulum risus posuere tempus.'
    ]),
    new SectionPiece('Middle', [
      'Quisque maximus a mauris fringilla volutpat. Quisque placerat urna libero, eu luctus quam accumsan vestibulum. Fusce cursus nisi turpis, quis ullamcorper nibh congue eu. Vestibulum mattis sem in posuere faucibus. Ut scelerisque, nulla faucibus consectetur dignissim, ante orci aliquet mi, quis semper odio turpis at.',
      'Morbi nec metus sollicitudin lectus porttitor varius. Aliquam feugiat, justo ac porttitor varius, libero ipsum tristique felis, sed efficitur ante.',
      'Pellentesque neque lectus, luctus in mauris non, facilisis convallis lacus. Praesent metus lorem, suscipit in leo vel, vestibulum sagittis erat. Morbi est velit, feugiat ac neque sed, suscipit fermentum felis. Maecenas nunc urna, scelerisque sed nisi eu, iaculis faucibus dolor. Donec id placerat neque.'
    ]),
    new SectionPiece('End', [
      'In ut laoreet libero. Aenean pellentesque malesuada lorem. Sed sodales metus a pharetra accumsan. Quisque pretium mattis ligula a pharetra. Donec ac aliquam justo. Cras a ante vitae lorem aliquam porttitor sed eget libero. Sed tempor, elit a feugiat blandit, est eros facilisis erat, accumsan semper lectus lorem nec est.',
      'Duis sem nunc, gravida quis dolor in, mattis sodales odio. Proin lacinia sed dui sed porttitor. Maecenas gravida egestas fermentum.',
      'Aenean vitae hendrerit arcu. Nunc congue dui at dapibus tempor. Ut hendrerit, lectus ac maximus faucibus, turpis quam blandit lorem, eget vestibulum sapien sem vel augue. Praesent in purus tellus.'
    ])
  ]
);

export { loremArticle }
