# Getting Started with the eCognition SDK

eCognition has a C++ SDK. There is some [documentation](https://support.ecognition.com/hc/en-us/articles/4408487699474-eCognition-SDK) online, but some sections seem to have not been updated in a while. Hopefully this brief guide can help to fill in some of the gaps. 

This is based on version of eCognition v10.2.

### Prerequisites

* A full version of eCognition
* An appropriately-licensed Visual Studio 2019. (It *may* be possible to install just the C++ build tools and use another IDE).

### 1. Install eCognition with its SDK

There is a checkbox for the SDK in the eCognition Developer installer, it is off by default. Once installed, it should be under the SDK folder alongside the other program files, e.g. `C:\Program Files\Trimble\eCognition Developer 10.2\SDK`.

In there you will find the required source and binary dependencies, samples, and some documentation (PDFs and readme.txt files).

### 2. Install Visual Studio 2019 with C++ and MFC

The docs suggest VS 2010 is required - this is no longer the case. You can confirm this by inspecting one of the sample project files. (Ignore also the Solution File and Project's ToolsVersion attribute).

```
<PlatformToolset>v142</PlatformToolset>
```
Looking this up will tell you which version of VS you need. (This may be a way to determine the required VS version in previous versions of eCognition also.)

So, you will need to have installed VS 2019 with the C++ - **you will also need the MFC optional component**.

