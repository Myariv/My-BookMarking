import classes from './AddUpdateForm.module.css';

const AddUpdateForm = (props) => {
  return (
    <form className={classes.form} onSubmit={props.onSubmithHandler}>
      <section className={classes.inputs}>
        <div className={classes.input}>
          <input
            placeholder='Title'
            type='text'
            id='title'
            value={props.title}
            onChange={(e) =>
              props.onDispatch({ type: 'TITLE', enterdTitle: e.target.value })
            }
          />
          {props.validTitle === false && (
            <p className={classes.invalid}>Title Is Required</p>
          )}
        </div>

        <div className={classes.input}>
          <input
            placeholder='URL'
            type='text'
            id='url'
            value={props.url}
            onChange={(e) => {
              props.onDispatch({ type: 'URL', enterdUrl: e.target.value });
            }}
          />
          {props.validUrl === false && (
            <p className={classes.invalid}>Invalid Url: Must includes (http, https)</p>
          )}
        </div>

        <div className={classes.input}>
          <input
            placeholder='Tags'
            type='text'
            id='tags'
            value={props.tags}
            onChange={(e) => {
              props.onDispatch({ type: 'TAGS', enterdTags: e.target.value });
            }}
          />
          {props.validTags === false && (
            <p className={classes.invalid}>Please Remove Comma ( , ) In The End</p>
          )}
        </div>

        <div className={classes.input}>
          <textarea
            placeholder='Notes'
            id='notes'
            rows={7}
            value={props.notes}
            onChange={(e) => {
              props.onDispatch({ type: 'NOTES', enterdNotes: e.target.value });
            }}
          />
        </div>
      </section>
      <button className={classes.button}>{props.isUpdate ? 'UPDATE' : 'ADD'}</button>
    </form>
  );
};

export default AddUpdateForm;

// const AddUpdateForm = (props) => {
//   return (
//     <form className={classes.form} onSubmit={props.onSubmithHandler}>
//       <section className={classes.inputs}>
//         <section className={classes.flex}>
//           <div className={classes.input}>
//             <label htmlFor='title'>Title</label>
//             <input
//               type='text'
//               id='title'
//               value={props.title}
//               onChange={(e) =>
//                 props.onDispatch({ type: 'TITLE', enterdTitle: e.target.value })
//               }
//             />
//           </div>
//           {props.validTitle === false && (
//             <p className={classes.invalid}>Title Is Required</p>
//           )}
//         </section>

//         <div className={classes.flex}>
//           <div className={classes.input}>
//             <label htmlFor='url'>URL</label>
//             <input
//               type='text'
//               id='url'
//               value={props.url}
//               onChange={(e) => {
//                 props.onDispatch({ type: 'URL', enterdUrl: e.target.value });
//               }}
//             />
//           </div>
//           {props.validUrl === false && (
//             <p className={classes.invalid}>Invalid Url: Must includes (http, https)</p>
//           )}
//         </div>

//         <div className={classes.flex}>
//           <div className={classes.input}>
//             <label htmlFor='tags'>Tags</label>
//             <input
//               type='text'
//               id='tags'
//               value={props.tags}
//               onChange={(e) => {
//                 props.onDispatch({ type: 'TAGS', enterdTags: e.target.value });
//               }}
//             />
//           </div>
//           {props.validTags === false && (
//             <p className={classes.invalid}>Please Remove Comma ( , ) In The End</p>
//           )}
//         </div>

//         <div className={classes.flex}>
//           <div className={classes.input}>
//             <label className={classes.start} htmlFor='notes'>
//               Notes
//             </label>
//             <textarea
//               id='notes'
//               rows={7}
//               value={props.notes}
//               onChange={(e) => {
//                 props.onDispatch({ type: 'NOTES', enterdNotes: e.target.value });
//               }}
//             />
//           </div>
//         </div>
//       </section>
//       <button className={classes.button}>{props.isUpdate ? 'UPDATE' : 'ADD'}</button>
//     </form>
//   );
// };

// export default AddUpdateForm;
