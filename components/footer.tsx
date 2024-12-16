export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos</h3>
            <p className="text-muted-foreground">
              Découvrez l'excellence camerounaise à travers son histoire, ses personnalités
              et sa vision pour l'avenir.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              Email: contact@cameroun-excellence.cm<br />
              Téléphone: +237 XXX XXX XXX
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Facebook
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cameroun Excellence. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}