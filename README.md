Project coding guidelines

Naming convention:

- BEM - Arash version 0.01a

  - each block should be self-contained and not carry the parrents name unless:
    - there is risk of multiple entities of the same block
    - : if so it should carry the closest contextual parrents name as shortend as possible with a hyfen.
    - is not contextually self-carrying

  HTML/CSS:

  - Hypphen and lowercase
  - an-example

  JS:

  - camelCase
  - anExample

(S)CSS structure:

- Put these in seperate scass files
  -- imports
  -- variabels
  -- general mixers
  -- put each self-contained sector in a seperate file and bigger elements like cards
- general selector rules for elements
- classes in the same order as the html
  -- if there is a block that dosen't carry the parrent block name, it should be ordered below the parrent block

- keywords in selectors/classes are ordered:
  - alphabeticly ascending
