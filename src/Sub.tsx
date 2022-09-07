interface Props {
  txt: string;
}

const Sub = ({ txt }: Props) => {
  const quote = "Only double quotes are available!";

  return (
    <div>
      <h3>{txt}</h3>
      <p>{quote}</p>
    </div>
  );
};

export default Sub;
