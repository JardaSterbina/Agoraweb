import type { StaffMember } from "../../types/StaffMember"

type StaffMembersProps = {
  title: string;
  masseur: StaffMember;
}

export default function StaffMembers({title, masseur }: StaffMembersProps) {
  return (
    <section className="max-w-[800px] mx-auto text-center">
      <h2>{title}</h2>
      <StaffMember {...masseur} />
    </section>
  )
}

function StaffMember({name, description, image, longDescription}: StaffMember) {
  return (
    <div className="flex gap-[1rem] flex-wrap justify-center">
      <div className="basis-[150px] max-w-[200px] grow text-center m-auto">
        <div>
          <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p className="text-center">{description}</p>
      </div>
      <div className="basis-[400px] grow text-center md:text-left">
        {longDescription.map((item, index) => (
          <p className="my-[1em]" key={index}>{item}</p>
        ))}
      </div>
    </div>
  )
}
