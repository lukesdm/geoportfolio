# Getting Started with the eCognition SDK

eCognition has a C++ SDK. There is some [documentation](https://support.ecognition.com/hc/en-us/articles/4408487699474-eCognition-SDK) online, but some sections seem to have not been updated in a while. Hopefully this brief guide can help to fill in some of the gaps. 

This is based on version of eCognition v10.2.

### Prerequisites

* A full version of eCognition
* An appropriately-licensed Visual Studio 2019. (It *may* be possible to install just the C++ build tools and use another IDE).
* Admin rights on your PC

### 1. Install eCognition with its SDK

There is a checkbox for the SDK in the eCognition Developer installer, it is off by default. Once installed, it should be under the SDK folder alongside the other program files, e.g. `C:\Program Files\Trimble\eCognition Developer 10.2\SDK`.

In there you will find the required source and binary dependencies, samples, and some documentation (PDFs and readme.txt files).

### 2. Explore the sample files and documentation

Take a look at the files and folders of the SDK. Let's say we are interested in the implementation of a custom image processing algorithm. You will find a useful readme.txt in `SDK\Engine\Samples`. For the rest of the guide, assume we are working with the sample in `SDK\Engine\Samples\SampleEPIAlgrSet`, which is a plugin containing a few processing algorithms.

### 3. Install Visual Studio 2019 with C++ and MFC

The docs suggest VS 2010 is required - this is no longer the case. You can confirm this by inspecting one of the sample project files. (Ignore also the Solution File and Project's ToolsVersion attribute).

E.g. from `SDK\Engine\Samples\SampleEPIAlgrSet\SampleEPIAlgrSet.vcxproj`:
```
<PlatformToolset>v142</PlatformToolset>
```
Looking this up will tell you which version of VS you need. (This may be a way to determine the required VS version in previous versions of eCognition also.)

So, you will need to have installed VS 2019 with C++ - **you also need the MFC optional component**.

If you miss the MFC component, you will see an error later pointing to a missing `afxres.h` file.

### 4. Open Visual Studio as Administrator and load the Solution

As you are building under a Program Files directory, you will need to run VS in admin mode. (You may be able to avoid this with some permissions changes.) 

You should now be able to open the sample Solution, `SampleEPIAlgrSet.sln`.

### 5. Fix missing source dependencies

If you try a build now, you will see a reference to a missing `OSWrapper/stdwrap.h`. Rectify this by copying the `SDK\DataIO\Include\OSWrapper` folder to `SDK\Engine\Include\OSWrapper`.

### 6. Build as Release

The Solution defaults to trying to build in Debug mode. But, the samples reference some debug libraries that aren't included in the SDK (e.g. `EngineD.lib` rather than `Engine.lib`). So, switch to Release mode. You should now be able to build the sample plugin.

The plugin is built to eCognition's parent directory, `C:\Program Files\Trimble\bin\plugins`.

![image](https://user-images.githubusercontent.com/2824165/160059959-f8ccaea5-04e7-4902-88c0-e335664f2ced.png)

### 7. Install the built plugin

To install the built plugin, is just needs to be copied under your eCognition install folder, i.e. to `C:\Program Files\Trimble\eCognition Developer 10.1\bin\plugins`.

![image](https://user-images.githubusercontent.com/2824165/160060617-e6cec389-38eb-4ad8-ae6e-6597ee0a6cb8.png)

You should now be able to start eCognition and see the sample algorithms in the 'Edit Process' window.

![image](https://user-images.githubusercontent.com/2824165/160060962-1d9e79a0-d981-4975-a47e-02e0f4c57729.png)

