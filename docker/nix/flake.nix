{
  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  
  inputs.erp.url = "path:../../";
  inputs.erp.inputs.nixpkgs.follows = "nixpkgs";
  inputs.erp.inputs.systems.follows = "systems";

  inputs.systems.url = "github:nix-systems/default";
  outputs = { systems, nixpkgs, erp, ... }: 
    let
      eachSystem = nixpkgs.lib.genAttrs (import systems);
    in
    {
      packages = eachSystem (system:
        let
          pkgs = import nixpkgs { inherit system; };
        in
        {
          ${system}.default = {
            name = "devcontainer-closure";
            paths = with pkgs; [
              coreutils
              bashInteractive
              erp.devShells.${system}.default
            ];
          };
        }
      );
    };
}
