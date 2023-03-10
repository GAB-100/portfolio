// import content
import { createElement, useState } from "react";
import { skills } from "./skills";
// import modal package
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

interface skillI {
  logo: string;
  name: string
}

const Skills = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState<skillI>({ name: "", logo: "" });

  function openModal(skill: any) {
    setIsOpen(true);
    onOpen()
    setSelectSkill(skill);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal
        isCentered={true}
        isOpen={isOpen} onClose={onClose}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader display="flex" gap="1rem" alignItems="center">
            <img className="h-10" src={selectSkill.logo} alt="..." />
            <h6>{selectSkill.name}</h6></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
              <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor sit, ame.</li>
              <li>Lorem ipsum dolor sit, amet consectetur</li>
              <li>
                Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
                beatae quos rem.
              </li>
            </ul>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* content */}
      <div className="md:container px-5  py-24">
        <Text as="h2" fontSize="1.875rem" data-aos="fade-down">
          {skills.title}
        </Text>
        <Text as="h4" fontSize="2.25rem" data-aos="fade-down">
          {skills.subtitle}
        </Text>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              // onClick={() => {

              //   openModal(skill);
              // }}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-md rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-16 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div

                  className="text-xl absolute top-3 right-3"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
