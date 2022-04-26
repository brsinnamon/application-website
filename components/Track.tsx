import { url } from "inspector";

type TrackProps = {
  title: string;
  url: string;
  download: string;
};

export default function Track(props: TrackProps) {
  const url = "Hello URL" + props.url;

  return (
    <>
      <h3>{props.title}</h3>

      <p>
        <iframe
          title={props.title}
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={props.url}
        ></iframe>
        {/* <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
    </div> */}

        <p>
          <a href={props.download}>download</a> |{" "}
          <a href="files/Sky_Orb_Free_Game_Music_License.txt">license</a>
        </p>
      </p>
    </>
  );
}
