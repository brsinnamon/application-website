import { url } from "inspector";

type SRAProps = {
  property: string;
};

export default function SRACalculator(props: SRAProps) {
  return (
    <>
      <h3>{props.property}</h3>

      <p>
        {/* <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
    </div> */}
      </p>
    </>
  );
}
