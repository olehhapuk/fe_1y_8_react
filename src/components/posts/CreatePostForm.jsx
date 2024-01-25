import { useFormik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yup.string().min(3).max(100).required(),
  category: yup.string().oneOf(['news', 'nature', 'it']).optional(),
  excerpt: yup.string().min(3).max(180).required(),
  image: yup.string().url().optional(),
  body: yup.string().min(3).required(),
});

function CreatePostForm() {
  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      excerpt: '',
      image: '',
      body: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return <div>CreatePostForm</div>;
}

export default CreatePostForm;
