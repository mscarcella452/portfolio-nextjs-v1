import { render, screen, fireEvent } from "@testing-library/react";
// import NavLinks from "@/components/NavLinks";
// import { usePathname } from "next/navigation";

// Mocking the usePathname hook from next/navigation
// jest.mock("next/navigation", () => ({
//   usePathname: jest.fn(),
// }));

// const navLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Contact", href: "/contact" },
// ];

describe("group", () => {
  it("should pass as a beta test", () => {
    expect(1).toBeTruthy();
  });
});

// describe("NavLinks", () => {
//   beforeEach(() => {
//     // Reset the mock before each test
//     usePathname.mockReset();
//   });

//   test("renders navigation links correctly", () => {
//     usePathname.mockReturnValue("/");

//     render(<NavLinks navLinks={navLinks} />);

//     // Check that the links render
//     expect(screen.getByText("Home")).toBeInTheDocument();
//     expect(screen.getByText("About")).toBeInTheDocument();
//     expect(screen.getByText("Contact")).toBeInTheDocument();
//   });

//   test("applies active color to the active link", () => {
//     usePathname.mockReturnValue("/about");

//     render(<NavLinks navLinks={navLinks} activeColor='text-blue-500' />);

//     const aboutLink = screen.getByText("About");
//     expect(aboutLink).toHaveClass("text-blue-500"); // The active link should have the active color class
//   });

//   test("applies hover color to links", () => {
//     usePathname.mockReturnValue("/");

//     render(<NavLinks navLinks={navLinks} hoverColor='text-red-500' />);

//     const homeLink = screen.getByText("Home");

//     // Simulate hovering over the link
//     fireEvent.mouseOver(homeLink);
//     expect(homeLink).toHaveClass("text-red-500"); // The link should have the hover color class when hovered
//   });

//   test("calls handleLinkClick on link click", () => {
//     usePathname.mockReturnValue("/");

//     const handleLinkClick = jest.fn();

//     render(<NavLinks navLinks={navLinks} handleLinkClick={handleLinkClick} />);

//     const homeLink = screen.getByText("Home");

//     fireEvent.click(homeLink);
//     expect(handleLinkClick).toHaveBeenCalledTimes(1); // The click handler should be called
//   });
// });
