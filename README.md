Project coding guidelines

Naming convention:

- BEM - Arash version 0.01a

  - each block should be self-contained and not carry the parrents name unless:
    - there is risk of multiple entities of the same block
    - : if so it should carry the closest contextual parrents name as shortend as possible with a hyfen. Ex:
      <header class="header">
        <nav class="head-nav"> // since there can be multiple nav's in the html
          <ul class="head-nav__menu">
            <li class="head-nav__menu-item">
              <a class="head-nav__menu-link">Home</a>
            </li>
          </ul>
        </nav>
      </header>

  HTML/CSS:

  - Hypphen and lowercase
  - an-example

  JS:

  - camelCase
  - anExample

HTML semantics:

CSS structure:

- imports
- variabels
- general mixers
- classes in the same order as the html

- keywords in selectors/classes are ordered:
  - alphabeticly ascending
