import StoryCard from "./StoryCard";

const stories = [
  {
    id: "01",
    name: "Bojan Angjeleski",
    src: "/firstStory.jpg",
    profile: "/me.jpg",
  },
  {
    id: "02",
    name: "Bojan Angjeleski",
    src: "/ThirdStory.jpg",
    profile: "/secondStory.jpg",
  },
  {
    id: "03",
    name: "Bojan Angjeleski",
    src: "/Forth.jpg",
    profile: "/me2.jpg",
  },
  {
    id: "04",
    name: "Bojan Angjeleski",
    src: "/five.jpg",
    profile: "/m3.jpg",
  },
  {
    id: "05",
    name: "Bojan Angjeleski",
    src: "/stori.jpg",
    profile: "/me.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(({ id, src, name, profile }) => (
        <StoryCard key={id} name={name} src={src} profile={profile} />
      ))}
    </div>
  );
}

export default Stories;
