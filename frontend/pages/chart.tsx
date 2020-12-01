import Sample from '@components/sample-rx';

export default function Chart() {
  return (
    <div>
      <Sample text="Hello! this is Chart page" />
    </div>
  );
}

// export default function Chart({ data }) {
//   console.log(data.data);
//   return (
//     <div>
//       <Sample text={data.data[5].artist} />
//     </div>
//   );
// }

// export async function getStaticProps(context) {
//   const res = await fetch('http://localhost:5000/v1/naver/music/chart/100');
//   const data = await res.json();

//   return {
//     props: { data },
//   };
// }
