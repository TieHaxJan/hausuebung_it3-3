# **React Native Hausübung: Anleitung für Setup und Nutzung**

In dieser Übung erweitern Sie eine bestehende React Native App, die mit Expo erstellt wurde. Folgen Sie dieser Anleitung, um alle notwendigen Tools zu installieren und das Projekt zu starten.

## **1. Installation der benötigten Tools**

### **1.1 Node.js**
- Laden Sie **Node.js** von der offiziellen Webseite herunter und installieren Sie es: [https://nodejs.org](https://nodejs.org)
- Überprüfen Sie nach der Installation die Versionen, um sicherzustellen, dass Node.js korrekt installiert wurde:
  ```bash
  node -v
  npm -v
  ```

### **1.3 Code-Editor**
- Installieren Sie **Visual Studio Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/)

## **2. Projekt verwenden**

### **2.1 Herunterladen der Projektdatei**

#### **Option 1: ZIP-Datei**
- Laden Sie die ZIP-Datei, die auf der Lernplattform bereitgestellt wurde, herunter.
- Entpacken Sie die Datei in einen Ordner Ihrer Wahl.
- Projektordner in Visual Studio Code öffnen.

#### **Option 2: Git-Repository (optional)**
- Falls Sie Git installiert haben, können Sie das Projekt direkt aus dem Repository klonen:
  ```bash
  git clone <repository-url>
  ```

- Projektordner in Visual Studio Code öffnen.

### **2.2 Installieren der Abhängigkeiten**
- Öffnen Sie ein Terminal im Projektordner und führen Sie den folgenden Befehl aus:
  ```bash
  npm install
  ```

### **2.3 Starten des Projekts**
- Starten Sie die Expo-Entwicklungsumgebung:
  ```bash
  npx expo start
  ```
- Dies öffnet die Expo Developer Tools in Ihrem Standardbrowser.

## **3. App testen**

### **3.1 Testen im Browser**
- Nach dem Start der Expo-Entwicklungsumgebung (`npx expo start`) in der Konsole `w` eingeben um die App im Browser zu öffnen.

### **3.2 Geräte-Emulation im Browser**
- In der Browseransicht können Sie verschiedene Gerätegrößen emulieren:
  - Öffnen Sie die Entwicklerwerkzeuge in Ihrem Browser (Rechtsklick > **"Untersuchen"** oder F12).
  - Aktivieren Sie den **Responsive Design Mode** (meistens ein Symbol eines Telefons/Tablets oben rechts).
  - Wählen Sie aus den verfügbaren Geräteprofilen aus, um die App in verschiedenen Bildschirmgrößen zu testen.

## **4. Aufgabe**

### **Beschreibung**
- Öffnen Sie die Datei `src/components/TodoFeature.tsx`.
- Fügen Sie dort Ihre Lösung hinzu, um das Todo Feature zu implementieren.

### **Aufgabe 1: Grundlegende Todo-Liste funktionsfähig machen**
- Stellen Sie sicher, dass die bereitgestellte `TodoFeature.tsx`-Datei wie vorgesehen funktioniert:
  - Nutzer sollen Aufgaben hinzufügen können.
  - Aufgaben sollen in einer Liste angezeigt werden.
  - Nutzer sollen einzelne Aufgaben löschen können.

### **Aufgabe 2: Checkbox hinzufügen, um mehrere Aufgaben zu löschen**
- Erweitern Sie die Komponente `TodoFeature`, sodass:
  - Jede Aufgabe mit einer Checkbox versehen wird, um sie auszuwählen.
  - Ein Button hinzugefügt wird, der alle ausgewählten Aufgaben löscht.
- Stellen Sie sicher, dass Aufgaben zwischen "ausgewählt" und "nicht ausgewählt" umgeschaltet werden können.

### **Aufgabe 3: Zustand für die Datenverwaltung verwenden**
- Ersetzen Sie die Verwendung von Reacts `useState`-Hook durch **Zustand** zur Verwaltung des Zustands:
  - Erstellen Sie einen Zustand-Store, um die Aufgaben und deren Auswahlstatus zu speichern.
  - Stellen Sie sicher, dass das Hinzufügen, Umschalten und Löschen von Aufgaben mit dem Zustand-Store korrekt funktioniert.

### **Ressourcen**
- Zustand-Dokumentation: [https://docs.pmnd.rs/zustand](https://docs.pmnd.rs/zustand)
- React Native CheckBox: [https://reactnative.dev/docs/checkbox](https://reactnative.dev/docs/checkbox)

## **5. Einreichung**
- Packen Sie Ihren Projektordner als ZIP-Datei:
  - Stellen Sie sicher, dass der Ordner **node_modules** nicht enthalten ist.
  - Nutzen Sie einen Namen wie `Projektname_IhrName.zip`.
- Laden Sie die ZIP-Datei auf die Lernplattform hoch.

## **6. Hilfsmittel und Ressourcen**
- [React Native Dokumentation](https://reactnative.dev/docs/getting-started)
- [Expo Dokumentation](https://docs.expo.dev/)
- [YouTube-Tutorials zu Expo und React Native](https://www.youtube.com/results?search_query=expo+react+native+tutorial)

## **7. Kontakt**
Falls Sie Fragen oder Probleme haben, kontaktieren Sie mich per E-Mail oder im Kursforum.

**Viel Erfolg!**