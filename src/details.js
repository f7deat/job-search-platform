import React, {useState} from 'react';

function Details() {
  
  const [like, setLike] = useState(false)

  return (
    <div className="details bg-white shadow-sm rounded">
      <div className="cover">
        <img src="https://cdn.thegentlemansjournal.com/wp-content/uploads/2015/02/google-highest-paid-jobs-1-1800x756-c-center.jpg" alt="Google" className="cover-image" />
        <div className="cover-logo">
          <img src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg" alt="logo" className="shadow-sm" />
        </div>
      </div>
      <div className="share">
        <button className="btn btn-share" type="button"><i className="fas fa-check text-success"></i></button>
        <button className="btn btn-share" type="button"><i className="fas fa-share"></i></button>
        <button className="btn btn-share" type="button" onClick={() => setLike(!like)}><i className={like ? "far fa-heart" : "far fa-heart text-danger" }></i></button>
      </div>
      <div className="summary">
        <div className="detail-name h3 mb-3 font-weight-bold">
          User Experience Designer
      </div>
        <div className="d-flex justify-content-between">
          <div>
            <a href="/#" className="brand-name">Google</a> &bull; USA, San Francisco
          </div>
          <div>
            17 review &bull; 94 rating
          </div>
        </div>
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sapien vitae felis blandit condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non velit eu nibh sollicitudin ullamcorper. Etiam quis ipsum vitae libero vehicula venenatis quis ac sapien. Integer nec lorem vehicula libero lobortis cursus. Integer finibus eros non fringilla porta. Mauris ipsum ante, luctus vitae augue at, sollicitudin porttitor nulla. Ut pellentesque rutrum nunc non rutrum. Fusce rutrum dapibus justo sit amet lobortis.
<br />
Nunc sollicitudin pharetra dui, ac mattis felis auctor quis. Fusce ornare neque urna, non tristique magna mollis at. Praesent porta tristique feugiat. In hac habitasse platea dictumst. Nam convallis aliquam lectus sed varius. Mauris mollis lobortis leo. Proin sit amet risus a enim rhoncus bibendum. Nam ipsum justo, pharetra id iaculis vitae, lacinia consequat quam.
<br />
Maecenas ante erat, volutpat elementum dignissim id, suscipit a tellus. Etiam vel nibh at felis commodo pulvinar sed et ante. Maecenas eleifend, augue eget dictum egestas, nunc velit tincidunt urna, quis pharetra tellus diam ac nulla. Aenean sit amet volutpat justo. Donec interdum turpis vel nulla hendrerit, sit amet elementum elit tempus. Nulla posuere est quis lorem consequat volutpat. Nunc feugiat turpis ut ex facilisis finibus a sit amet nibh. Aenean congue, nibh ut consequat imperdiet, nisi ex porttitor neque, eu posuere massa augue vel tellus. Fusce volutpat neque sit amet nisl egestas, vitae dignissim lorem posuere. Aenean sed elementum ligula, feugiat viverra odio.
<br />
Suspendisse posuere, ligula eu porta fermentum, nisl dolor ullamcorper nunc, quis consequat velit arcu eu arcu. Phasellus imperdiet purus non felis dignissim euismod. Pellentesque gravida eros tellus, in euismod arcu tempor eu. Sed non molestie metus. Proin at tristique augue. Quisque malesuada ante nec dui cursus, non eleifend velit accumsan. Proin sed porttitor orci. Suspendisse potenti. Integer maximus risus mauris, sit amet consectetur nibh consectetur quis. Nulla nec blandit purus.
<br />
Sed vehicula et velit id euismod. Pellentesque imperdiet luctus enim sit amet porta. In aliquam neque eu eros congue, in condimentum libero sagittis. Suspendisse urna nisl, tincidunt eget placerat quis, suscipit in quam. Nunc laoreet magna et tortor ornare ultricies. Mauris vehicula efficitur mollis. Morbi in purus ac nisl interdum placerat id in turpis. Ut gravida urna quis turpis euismod vulputate. In faucibus lacinia dictum. Donec luctus suscipit pretium. Donec felis nibh, pulvinar vitae sagittis eu, tincidunt id mi.
      </div>
    </div>
  );
}

export default Details;
