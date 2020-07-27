/**
 * EDIT: itsamoreh Unsplash Block
 */
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash( { accessKey: '' } );

const Edit = ( props ) => {
	const {
		attributes: {
			image,
		},
		className,
		setAttributes,
		isSelected,
	} = props;

	const getPhoto = () => {
		unsplash.photos.getRandomPhoto()
			.then( ( res ) => res.json() )
			.then( ( json ) => {
				setAttributes( {
					image: json.urls.small,
				} );
			} );
	};

	return (
		<div
			className={ className }
		>
			{
				isSelected && (
					<div>
						<div>UNSPLASH LOGO</div>
						<input type="text" name="search" placeholder="Query (optional)" /><br />
						<button onClick={ getPhoto }>Get Image</button>
					</div>
				)
			}
			<img src={ image } alt="" />
		</div>
	);
};

export default Edit;
