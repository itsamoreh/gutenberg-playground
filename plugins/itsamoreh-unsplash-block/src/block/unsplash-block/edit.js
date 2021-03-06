/**
 * EDIT: itsamoreh Unsplash Block
 */

import logo from './logo';

import Unsplash from 'unsplash-js';

const { __ } = wp.i18n;

const Edit = ( props ) => {
	const {
		attributes: {
			image,
			query,
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
					<div className="image-select">
						<div className="logo">
							{ logo }
						</div>
						<div className="image-select-form">
							<input className="query" type="text" name="query" placeholder={ __( 'Query (optional)' ) } value={ query } />
							<button className="button" onClick={ getPhoto }>{ __( 'Get Image' ) }</button>
						</div>
					</div>
				)
			}
			<img src={ image } alt="" />
		</div>
	);
};

export default Edit;
