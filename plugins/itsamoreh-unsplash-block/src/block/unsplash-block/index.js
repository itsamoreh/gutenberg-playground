/**
 * REGISTER: itsamoreh Unsplash Block.
 */
import edit from './edit';
import save from './save';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'itsamoreh/unsplash-block', {
	title: __( 'itsamoreh Unsplash Block', 'unsplash-block' ),
	icon: 'edit',
	category: 'common',
	keywords: [
		__( 'itsamoreh', 'unsplash-block' ),
		__( 'unsplash-block', 'unsplash-block' ),
	],
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	edit,
	save,
} );
