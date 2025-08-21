import AllRoutes from "./components/routes/AllRoutes";
import AppBgVideo from "./assets/video/UWF_BG.mp4";
// import AppBgAudio from "./assets/audio/NewAppM_BG.mp3"

const App = () => {
  return (
    <section className="text-white h-auto w-full relative m-auto">
      {/* video section */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover -z-10"
      >
        <source src={AppBgVideo} type="video/mp4" />
      </video>

      {/* 🤕🤕🤕 */}
      {/* <audio src={AppBgAudio} autoPlay loop controls={false} /> */}

      <AllRoutes />
    </section>
  );
};

export default App;
