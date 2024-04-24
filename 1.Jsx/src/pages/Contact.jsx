import Staless from '../component/Staless';
export default function Contact({ name }) {
  return (
    <>
      <div>Hello welcome to the comtact us page built by {name}</div>

      <Staless collectedFromContact={name} />
    </>
  );
}
