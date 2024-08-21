// type ArtworkFormState = {
//   title: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   artistId: string;
// };
//
// type Action =
//   | { type: 'SET_TITLE'; payload: string }
//   | { type: 'SET_DESCRIPTION'; payload: string }
//   | { type: 'SET_PRICE'; payload: number }
//   | { type: 'SET_IMAGE_URL'; payload: string }
//   | { type: 'SET_ARTIST_ID'; payload: string }
//   | { type: 'RESET_FORM'; payload: ArtworkFormState };
//
// const formReducer = (state: ArtworkFormState, action: Action): ArtworkFormState => {
//   switch (action.type) {
//     case 'SET_TITLE':
//       return { ...state, title: action.payload };
//     case 'SET_DESCRIPTION':
//       return { ...state, description: action.payload };
//     case 'SET_PRICE':
//       return { ...state, price: action.payload };
//     case 'SET_IMAGE_URL':
//       return { ...state, imageUrl: action.payload };
//     case 'SET_ARTIST_ID':
//       return { ...state, artistId: action.payload };
//     case 'RESET_FORM':
//       return action.payload;
//     default:
//       return state;
//   }
// };
